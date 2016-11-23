%lex

%%
\s+ /* Skip white space */
([0-9]+(\.[0-9]+)?)|(\.[0-9]+)  return 'NUMBER';
([A-Za-z_]+[0-9A-Za-z_-]*)  return 'VAR';
'+'     return '+';
'-'     return '-';
'*'     return '*';
'/'     return '/';
';'     return ';';
'='     return 'ASSIGNMENT';
<<EOF>> return 'EOF';

/lex

%{
    var path = require("path");
    var Tree = require(path.resolve("./lib/src/tree.js"));
    var operatorNode = require(path.resolve("./lib/src/nodes/operatorNode.js"));
    var identifierNode = require(path.resolve("./lib/src/nodes/identifierNode.js"));
    var numberNode = require(path.resolve("./lib/src/nodes/numberNode.js"));
    var assignmentNode = require(path.resolve("./lib/src/nodes/assignmentNode.js"));
    var parseTrees = [];
%}

%left '+' '-'
%left '*' '/'
%left UMINUS
%start program
%%

program
    :   block
    |   program block
    |   program EOF
        {return parseTrees;}
    ;
e
    :   e '+' e
        { $$ = new Tree(new operatorNode('+'), [$1, $3]);}
    |   e '-' e
        {$$ = new Tree(new operatorNode('-'), [$1, $3]);}
    |   e '*' e
        {$$ = new Tree(new operatorNode('*'), [$1, $3]);}
    |   e '/' e
        {$$ = new Tree(new operatorNode('/'), [$1, $3]);}
    |   NUMBER
        {$$ =  new numberNode(Number(yytext));}
    |   '-' e %prec UMINUS
        {$$ = -$2;}
    ;

variable
    :   VAR
        {$$ = new identifierNode(yytext);}
    ;
TERMINATOR
    :   ';'
    ;

statement
    :   variable ASSIGNMENT e
        {$$ = new Tree(new assignmentNode('=',[$1, $3]),[$1,$3]);}
    ;
block
    :   statement  TERMINATOR
        {parseTrees.push($1)}
    ;