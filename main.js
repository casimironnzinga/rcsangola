window.addEventListener('scroll', onScroll)

onScroll()
function onScroll() {
    showNavOnScroll()
    showBackToTopButtonOnScroll()

    activateMenuAtCurrentSection(home)
    activateMenuAtCurrentSection(services)
    activateMenuAtCurrentSection(about)
    activateMenuAtCurrentSection(partners)
    activateMenuAtCurrentSection(contact)
}

function activateMenuAtCurrentSection(section) {
    //Linha alvo
    const targetLine = scrollY + innerHeight / 2;

    //verificar se a seção passou da linha

    //O Top da seção
    const sectionTop = section.offsetTop;

    //A altura da seção
    const sectionHeight = section.offsetHeight;

    //O Topo da Seção chegou ou ultrapassou a linha alvo
    const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop;


    //Informações dos dados e da lógica
    //console.log(
    //        'O Topo da seção chegou ou passou da linha?',
    //        sectionTopReachOrPassedTargetLine
    //       );
    
    
    // verificar se a base está abaixo da linha alvo
    
    //A seção termina aonde?
    const sectionEndsAt = sectionTop + sectionHeight;
    
    // O final da seção passou a linha alvo
    const sectionEndPassedTargetLine = sectionEndsAt <= targetLine;
    
    //console.log('O fundo da seção passou da linha?',
    //!sectionEndPassedTargetLine);
    
    // Limites da seção
    const sectionBoundaries = 
    sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine;
    
    
    const sectionId = section.getAttribute('id');
    
    const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`);
    
    menuElement.classList.remove('active');
    
    if(sectionBoundaries){
        menuElement.classList.add('active');
    }
}

function showNavOnScroll() {
    if (scrollY > 0) {
        navGat.classList.add('scroll');
    } else {
        navGat.classList.remove('scroll');
    }
}

function showBackToTopButtonOnScroll() {
    if (scrollY > 550) {
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
}

function openMenu() {
    document.body.classList.add('menu-expanded');
}

function closeMenu() {
    document.body.classList.remove('menu-expanded');
}

