function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.querySelector('#nested .target')
}

function increaseRankBy(n){
  const rankLists = document.querySelectorAll('.ranked-list li');

  for (let i = 0, l = rankLists.length; i < l; i++) {
  rankLists[i].innerHTML = (parseInt(rankLists[i].innerHTML) + n).toString();
}
  }

function deepestChild(){
var deep = document.querySelector('div#grand-node');

while (deep.querySelector('div')){
  deep = deep.querySelector('div');
}
return deep;
}
