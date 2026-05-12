var element = document.querySelector('#onloading');

function show_PageBody(){
    setTimeout(function(){update_Wrapper(); },1000);
    function update_Wrapper(){
        document.getElementById('BodyWrap').style.display='block';
        document.getElementById('BodyWrap').style.zIndex='5';
    }
}