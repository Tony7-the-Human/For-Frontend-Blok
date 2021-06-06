document.addEventListener('DOMContentLoaded', () => {

    const featureLinkElems = document.querySelectorAll('.schedule-control');
    const featureSubElems = document.querySelectorAll('.schedule-descr');
    const addBackground = document.querySelectorAll('.schedule-item')
    const addColor = document.querySelectorAll('.schedule-name')
    const addColorList = document.querySelectorAll('.schedule__list')
    console.log(addBackground);
    // background color

    featureLinkElems.forEach((btn, index) => {
        btn.addEventListener('click', () => {

            if (btn.classList.contains('schedule-control_active')) {
                btn.classList.remove('schedule-control_active');
                featureSubElems.forEach((featureSubElem) => {
                    featureSubElem.classList.add('hidden')
                    addBackground[index].style.background = '#2a2f36'
                    addColor[index].style.color = '#fff'
                })


            } else {
                featureLinkElems.forEach((featureLinkElem) => {
                    featureLinkElem.classList.remove('schedule-control_active')
                })
                featureSubElems.forEach((featureSubElem) => {
                    featureSubElem.classList.add('hidden')

                })
                featureSubElems[index].classList.remove('hidden')
                addBackground[index].style.background = '#fff'
                addColor[index].style.color = '#2a2f36'
                addColorList.forEach((item) => {
                    item.style.color = '#2a2f36'
                })

                btn.classList.add('schedule-control_active')

            }



        })
    });



})