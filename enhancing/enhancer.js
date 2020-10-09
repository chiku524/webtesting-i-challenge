module.exports = {
  success,
  fail,
  repair,
  get,
};

function success(item) {
  let upgradedItem = {...item};
  
  if(upgradedItem.enhancement >= 20) {
    upgradedItem.enhancement += 1;
  }

  return upgradedItem;
}

function fail(item) {
  let downgradedItem = {...item};

  if(downgradedItem.enhancement < 15) {
    downgradedItem.durability -= 5;
  } else if(downgradedItem.enhancement >= 15) {
    downgradedItem.durability -= 10;
  }
  
  if(downgradedItem.enhancement > 16) {
    downgradedItem.enhancement -= 1;
  }

  return downgradedItem;
}

function repair(item) {
  let repairedItem = {...item};
  
  repairedItem.durability = 100;

  return repairedItem;
}

function get(item) {
  let modifiedItem = {...item};

  if(modifiedItem.enhancement === 0) {
    return modifiedItem;
  } else {
    modifiedItem.name = `[+${modifiedItem.enhancement}] ${modifiedItem.name}`
    return modifiedItem;
  }
}
