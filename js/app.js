let inp=document.querySelector('#input-field')
let color =document.querySelectorAll('.color-box')
let azaf=document.querySelector('#btn-save')
let div=document.querySelector('#listed')
let rang
let pakkon=document.querySelector('#btn-delete')
color.forEach(function(n){
    n.addEventListener('click', function(){
        rang=n.style.backgroundColor
        inp.style.backgroundColor=rang
    })
})
azaf.addEventListener('click',azafekadan)
pakkon.addEventListener('click',pak)
function azafekadan(){
    if(inp.value!=''){

        let diiv=document.createElement('div')
        diiv.className="card shadow-sm rounded"
        div.append(diiv)
        let p=document.createElement('p')
        p.className='card-text p-3'
        p.setAttribute('style','background-color:'+String(rang))
        p.innerHTML=inp.value
        diiv.append(p)
        inp.value=''
        // diiv.addEventListener('click',function (){
        //     diiv.remove()
        // })
    }
}

function pak(){
    inp.value=''
    inp.style.backgroundColor='#fff'
}
inp.addEventListener('keydown',function(event){
    if (event.code=='Enter'){
        azafekadan()
    }
})
div.addEventListener('click', function(event){
    if (event.target.tagName=='P'){

        event.target.parentElement.remove()
    }
    // console.log(event.target.tagName);
    // if(event.target.tagName=='P'){
    //     event.target.remove()
    //     console.log('to');
    // }
})