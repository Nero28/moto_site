const modals = () => {
    //привязка модального окна к определенному тригеру
    const bindModal = (triggerSelector, modalSelector, closeSelector, closeClickOverlay = true) => {
        const trigger = document.querySelectorAll(triggerSelector),
            modal = document.querySelector(modalSelector),
            close = document.querySelector(closeSelector);
        // windows=document.querySelectorAll('[data-modal'),
        // scroll= calScroll;


        trigger.forEach(item => {
            item.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault();
                }
                // windows.forEach(item=>{
                //     item.style.display='none';
                // })

                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';
                // document.body.style.marginRight=`${scroll}px`;
            })
        });

        close.addEventListener('click', () => {
            // windows.forEach(item=>{
            //     item.style.display='none';
            // })

            modal.style.display = 'none';
            document.body.style.overflow = '';
            // document.body.style.marginRight=`0px`;
        });
        
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
                document.body.style.overflow = '';
                // windows.forEach(item => {
                //     item.style.display = 'none';
                };
               
                // document.body.style.marginRight=`0px`;

            
        })
    };


    const showModalByTime = (selector, time) => {
        setTimeout(() => {
            document.querySelector(selector).style.display = 'block';
            document.body.style.overflow = 'hidden';
        }, time);
    };

    // function calcScroll(){

    // }

    bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
    bindModal('.phone_link', '.popup', '.popup .popup_close');


};
export default modals;