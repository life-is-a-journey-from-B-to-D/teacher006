window.alert("※このサイトで示されたものを無断で送信・アップロード・保存することを固く禁ずる。")

const showScroll = function () {

    const element = document.querySelectorAll( '.fadeinElem' ),
          windowH = window.innerHeight;

    let divisor = 1.2,
        nowY,
        elementY;

    window.addEventListener( 'scroll', function () {
        nowY = window.scrollY || window.pageYOffset;
        let count = 0;
        while ( count < element.length ) {
            ( function ( args ) {
                elementY = element[ args ].getBoundingClientRect().top + nowY;
                if ( nowY > elementY - ( windowH / divisor ) ) {
                    element[ args ].classList.add( 'show' );
                } else {
                    element[ args ].classList.remove( 'show' );
                }
            } ) ( count );
            count++;
        }
    }, false );

};

showScroll();



const date = new Date();
const year = date.getFullYear();
const month = ("0" + (date.getMonth() + 1)).slice(-2);
const day = ("0" + date.getDate()).slice(-2);
const hour = ("0" + date.getHours()).slice(-2);
const minute = ("0" + date.getMinutes()).slice(-2);
const second = ("0" + date.getSeconds()).slice(-2);

document.getElementById("date").textContent = year + "/" + month + "/" + day + " " + hour + ":" + minute + ":" + second;