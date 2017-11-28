var works = document.getElementById("work_boxs"),
    popup = document.getElementById("popup"),
    big = document.getElementById("big"),
    closePopup = document.getElementById("close_popup"),
    nav = document.getElementById("nav"),
    closeNav = document.getElementById("close_nav");

// 图片点击
works.addEventListener('click', function(e) {
  if(e.target.nodeName == 'IMG'){
    big.src = 'img/' + e.target.dataset.src + '.png';
    popup.classList.add('show')
  }
})

// 弹层关闭按钮
closePopup.addEventListener('click', function() {
  popup.classList.remove('show');
})

// 导航关闭按钮
closeNav.addEventListener('click', function(e) {
  nav.classList.add('hide');
  e.stopPropagation()
})

// 导航展开
nav.addEventListener('click', function() {
  if(this.classList.contains('hide')){
    this.classList.remove('hide')
  }
})