%lex

%%
\s+ /* Skip white space */
([0-9]+(\.[0-9]+)?)|(\.[0-9]+)  return 'NUMBER';
'+'     return '+';
'-'     return '-';
'*'     return '*';
'/'     return '/';
<<EOF>> return 'EOF';

/lex

%{
    var path = require("path");
    var generators = require(path.resolve("./lib/src/nodeGenerator.js"));
%}

%left '+' '-'
%left '*' '/'
%left UMINUS
%start convert
%%

convert
    :   e  EOF
        {return $1;}
    ;
e
    :   e '+' e
        {$$ = {child1: $1, operator: new generators.operatorNode('+'), child2: $3};}
    |   e '-' e
        {$$ = {child1: $1, operator: new generators.operatorNode('-'), child2: $3};}
    |e '*' e
        {$$ = {child1: $1, operator: new generators.operatorNode('*'), child2: $3};}
    | e '/' e
        {$$ = {child1: $1, operator: new generators.operatorNode('/'), child2: $3};}
    |   NUMBER
        {$$ =  new generators.numberNode(Number(yytext));}
    | '-' e %prec UMINUS
        {$$ = -$2;}
    ;