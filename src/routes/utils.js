function decodeEntities(s){
    var str, temp = document.createElement('p');
    temp.innerHTML = s;
    str = temp.textContent || temp.innerText;
    temp = null;
    str = str.replace(/\[|\]/g, '');
    return str;
}

function formatTitle(s) {
  return decodeEntities(s).split(' ').join('-');
}

module.exports = {
  decodeEntities,
  formatTitle
}