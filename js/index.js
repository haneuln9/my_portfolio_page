// const abt1 = document.querySelector ('#tab_sn1')
// const abt2 = document.querySelector ('#tab_sn2')
// const abt3 = document.querySelector ('#tab_sn3')
// const sn1 = document.querySelector ('#section_num1')
// const sn2 = document.querySelector ('#section_num2')
// const sn3 = document.querySelector ('#section_num3')
// console.log(abt1,abt2,abt3,sn1,sn2,sn3)
// // abt1.forEach(function(t,i){
// //     t.addEventListener('click',function(e){
// //         e.preventDefault()
// //         window.scrollTo(0,sn1.offsetTop)
// //     })
// // })
// abt1.addEventListener
// re_img.addEventListener('mouseover',function(e){
//     re_img_txt.style.display = 'block'
// })
// re_img.addEventListener('mouseout',function(e){
//     re_img_txt.style.display = 'none'
// })
const bannerImg = document.querySelectorAll ('.banner_page .banner_img')
const subImg = document.querySelectorAll ('.banner_sub .banner_sub_img ')
console.log(bannerImg,subImg)
for(let i of subImg){i.style.display = 'none'}
bannerImg.forEach(function(t, i , a){
    t.addEventListener('click',function(e){
        e.preventDefault()
        for(let i of subImg){i.style.display = 'none'}
        subImg[i].style.display = 'block'
    })
})
subImg.forEach(function(t, i){
    t.addEventListener('mouseout',function(e){
        e.preventDefault()
        t.style.display= 'none'
    })
})
subImg.forEach(function(t, i){
    t.addEventListener('click',function(e){
        e.preventDefault()
        t.style.display= 'none'
    })
})
