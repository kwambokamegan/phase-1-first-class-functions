//receivesAFunction

function receivesAFunction(callback)

{ callback() ; }


// receivesANamedFunction

function returnsANamedFunction()

{ return function mynamedFunction () {} ; }


//returnsAnAnonymousFunction

function returnsAnAnonymousFunction () 
{return  function () {} ; }
