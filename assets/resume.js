const copyRight = document.querySelector('.copy-right');
console.log(copyRight);
const date = new Date();
copyRight.innerHTML = `&copy ${date.getFullYear()}. All Right Reserved`;
