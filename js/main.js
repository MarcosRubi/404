window.addEventListener('load', ()=>{

    var search = document.getElementById('txtSearch');
    const btnSearch = document.getElementById('btnSearch');

    btnSearch.addEventListener('click', ()=>{
        if(typeof search.val === "undefined" || search.val === null ){
            search.style.border="1px solid red";
            btnSearch.style.background ="red";
            btnSearch.style.color="#fff";
        }
    })

})