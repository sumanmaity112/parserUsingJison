%lex

%%
\s+ /* Skip white space */
([0-9]+(\.[0-9]+)?)|(\.[0-9]+)  return 'NUMBER';
'+'     return '+';
<<EOF>> return 'EOF';

/lex
%start convert
%%

convert
    :   e  EOF
        {console.log($1); return $1;}
    ;
e
    :   e '+' NUMBER
        {$$ = '(' + $1 + ' + ' + $3 + ')';}
    |   NUMBER
        {$$ = yytext;}
    ;