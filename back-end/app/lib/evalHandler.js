
/* CONDITION + ENTIRE EVAL */

function evalHandler(curve){

    var expressions = [],
        types = [];
    
    curve.forEach(function(e){
        types.push(e.value);
        
        if(e.value == "gaussian"){
            expressions.push('((1/('+e.params.sigma+'*sqrt(2*pi)))*exp(-((x-'+e.params.mu+')^2/2*'+e.params.sigma+'^2)))');
            // expressions.push('('+e.params.height+'*exp(-((x-'+e.params.mu+')^2/2*'+e.params.sigma+'^2)))');

        }else if(e.value == "sigmoid"){
            expressions.push('(1/(1+exp(-'+e.params.lambda+'*x)))');

        }else if(e.value == "logarithmic"){
            expressions.push('log(x)');

        }else if(e.value == "polynomial"){
            expressions.push('x^4+x^3+x^2+x');

        }else if(e.value == "noise"){
            expressions.push('random('+e.params.min+','+e.params.max+')');

        }else{
            expressions.push('');
            
        }
    });

    var expression = expressions.join();
    var rep = expression.replace(/,/g,'+').toString();

    var handlerRes = {
        'curve': rep,
        'types': types
    };

    return handlerRes;
    
}


module.exports = evalHandler;
