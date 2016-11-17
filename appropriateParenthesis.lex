%lex

%%
\s+ /* Skip white space */
([0-9]+(\.[0-9]+)?)|(\.[0-9]+)  return 'NUMBER';
'+'     return '+';
'-'     return '-';
<<EOF>> return 'EOF';

/lex

%left '+' '-'
%left UMINUS
%start convert
%%

convert
    :   e  EOF
        {console.log($1); return $1;}
    ;
e
    :   e '+' e
        {$$ = '(' + $1 + ' + ' + $3 + ')';}
    |   e '-' e
        {$$ = '(' + $1 + ' - ' + $3 + ')';}
    |   NUMBER
        {$$ = yytext;}
    | '-' e %prec UMINUS
        {$$ = -$2;}
    ;