function caffeineStudy(days){
    let caffeine = 0;

    for (let i = 1; i <= days; i++) {
        //3 coffee => 150ml => 40 mg per 100ml
        caffeine += ((3 * 150) / 100) * 40;
        //2 colas => 250ml => 8mg per 100
        caffeine += ((2 * 250) / 100) * 8;
        //3 teas => 350ml => 20mg per 100
        caffeine += ((3 * 350) / 100) * 20;
        if (i % 5 === 0) {
            //3 energy drinks => 500ml => 30mg per 100ml
            caffeine += ((3 * 500) / 100) * 30;
        }
        if (i % 9 === 0) {
            //4 colas => 250ml => 8mg   2 energy 
            caffeine += ((4 * 250) / 100) * 8;
            caffeine += ((2 * 500) / 100) * 30;
        }       
    }

    console.log(`${caffeine} milligrams of caffeine were consumed`)
}

caffeineStudy(8) // 3890