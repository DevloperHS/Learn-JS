// For three behaviors based on two conditions, use else and if togethe

/*
Return Equal
Let's imagine we're building a website that requires users to have a subscription to access content. We want to encourage users to try it out so we add a free trial.

Let's update the canAccess function to allow access if the user has either a subscription or a free trial.

If either purchasedSubscription or freeTrial are true, return true. Otherwise return false.
*/

function canAccess(purchasedSubscription, freeTrial) {
  if (purchasedSubscription) {
    return true;
  } else if (freeTrial) {
    return true;
  }
  return false;
}

console.log(canAccess(true, false)); //true
console.log(canAccess(false, true)); //true
console.log(canAccess(false, false)); //false

