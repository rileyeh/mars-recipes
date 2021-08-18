const recipes = [
    {
        category: 'break', 
        name: 'one', 
        img: 'https://static01.nyt.com/images/2021/01/26/well/well-foods-microbiome/well-foods-microbiome-superJumbo.jpg', 
        ingredients: ['thing', 'other thing', 'third thing'],
        instructions: ['step 1: blah blah blah', 'step 2: blah blah']
    }, 
    {
        category: 'break', 
        name: 'two', 
        img: 'https://static01.nyt.com/images/2021/01/26/well/well-foods-microbiome/well-foods-microbiome-superJumbo.jpg', 
        ingredients: ['thing', 'other thing', 'third thing'],
        instructions: ['step 1: blah blah blah', 'step 2: blah blah']
    }, 
    {
        category: 'break', 
        name: 'three', 
        img: 'https://static01.nyt.com/images/2021/01/26/well/well-foods-microbiome/well-foods-microbiome-superJumbo.jpg', 
        ingredients: ['thing', 'other thing', 'third thing'],
        instructions: ['step 1: blah blah blah', 'step 2: blah blah']
    }, 
    {
        category: 'lunch', 
        name: 'four', 
        img: 'https://static01.nyt.com/images/2021/01/26/well/well-foods-microbiome/well-foods-microbiome-superJumbo.jpg', 
        ingredients: ['thing', 'other thing', 'third thing'],
        instructions: ['step 1: blah blah blah', 'step 2: blah blah']
    }, 
    {
        category: 'lunch', 
        name: 'five', 
        img: 'https://static01.nyt.com/images/2021/01/26/well/well-foods-microbiome/well-foods-microbiome-superJumbo.jpg', 
        ingredients: ['thing', 'other thing', 'third thing'],
        instructions: ['step 1: blah blah blah', 'step 2: blah blah']
    }, 
    {
        category: 'dinner', 
        name: 'six', 
        img: 'https://static01.nyt.com/images/2021/01/26/well/well-foods-microbiome/well-foods-microbiome-superJumbo.jpg', 
        ingredients: ['thing', 'other thing', 'third thing'],
        instructions: ['step 1: blah blah blah', 'step 2: blah blah']
    }, 
    {
        category: 'dinner', 
        name: 'seven', 
        img: 'https://static01.nyt.com/images/2021/01/26/well/well-foods-microbiome/well-foods-microbiome-superJumbo.jpg', 
        ingredients: ['thing', 'other thing', 'third thing'],
        instructions: ['step 1: blah blah blah', 'step 2: blah blah']
    }, 
    {
        category: 'dinner', 
        name: 'eight', 
        img: 'https://static01.nyt.com/images/2021/01/26/well/well-foods-microbiome/well-foods-microbiome-superJumbo.jpg', 
        ingredients: ['thing', 'other thing', 'third thing'],
        instructions: ['step 1: blah blah blah', 'step 2: blah blah']
    }, 
    {
        category: 'break', 
        name: 'one', 
        img: 'https://static01.nyt.com/images/2021/01/26/well/well-foods-microbiome/well-foods-microbiome-superJumbo.jpg', 
        ingredients: ['thing', 'other thing', 'third thing'],
        instructions: ['step 1: blah blah blah', 'step 2: blah blah']
    }, 
    {
        category: 'break', 
        name: 'two', 
        img: 'https://static01.nyt.com/images/2021/01/26/well/well-foods-microbiome/well-foods-microbiome-superJumbo.jpg', 
        ingredients: ['thing', 'other thing', 'third thing'],
        instructions: ['step 1: blah blah blah', 'step 2: blah blah']
    }, 
    {
        category: 'break', 
        name: 'three', 
        img: 'https://static01.nyt.com/images/2021/01/26/well/well-foods-microbiome/well-foods-microbiome-superJumbo.jpg', 
        ingredients: ['thing', 'other thing', 'third thing'],
        instructions: ['step 1: blah blah blah', 'step 2: blah blah']
    }, 
    {
        category: 'lunch', 
        name: 'four', 
        img: 'https://static01.nyt.com/images/2021/01/26/well/well-foods-microbiome/well-foods-microbiome-superJumbo.jpg', 
        ingredients: ['thing', 'other thing', 'third thing'],
        instructions: ['step 1: blah blah blah', 'step 2: blah blah']
    }, 
    {
        category: 'lunch', 
        name: 'five', 
        img: 'https://static01.nyt.com/images/2021/01/26/well/well-foods-microbiome/well-foods-microbiome-superJumbo.jpg', 
        ingredients: ['thing', 'other thing', 'third thing'],
        instructions: ['step 1: blah blah blah', 'step 2: blah blah']
    }, 
    {
        category: 'dinner', 
        name: 'six', 
        img: 'https://static01.nyt.com/images/2021/01/26/well/well-foods-microbiome/well-foods-microbiome-superJumbo.jpg', 
        ingredients: ['thing', 'other thing', 'third thing'],
        instructions: ['step 1: blah blah blah', 'step 2: blah blah']
    }, 
    {
        category: 'dinner', 
        name: 'seven', 
        img: 'https://static01.nyt.com/images/2021/01/26/well/well-foods-microbiome/well-foods-microbiome-superJumbo.jpg', 
        ingredients: ['thing', 'other thing', 'third thing'],
        instructions: ['step 1: blah blah blah', 'step 2: blah blah']
    }, 
    {
        category: 'dinner', 
        name: 'eight', 
        img: 'https://static01.nyt.com/images/2021/01/26/well/well-foods-microbiome/well-foods-microbiome-superJumbo.jpg', 
        ingredients: ['thing', 'other thing', 'third thing'],
        instructions: ['step 1: blah blah blah', 'step 2: blah blah']
    }, 
    {
        category: 'break', 
        name: 'one', 
        img: 'https://static01.nyt.com/images/2021/01/26/well/well-foods-microbiome/well-foods-microbiome-superJumbo.jpg', 
        ingredients: ['thing', 'other thing', 'third thing'],
        instructions: ['step 1: blah blah blah', 'step 2: blah blah']
    }, 
    {
        category: 'break', 
        name: 'two', 
        img: 'https://static01.nyt.com/images/2021/01/26/well/well-foods-microbiome/well-foods-microbiome-superJumbo.jpg', 
        ingredients: ['thing', 'other thing', 'third thing'],
        instructions: ['step 1: blah blah blah', 'step 2: blah blah']
    }, 
    {
        category: 'break', 
        name: 'three', 
        img: 'https://static01.nyt.com/images/2021/01/26/well/well-foods-microbiome/well-foods-microbiome-superJumbo.jpg', 
        ingredients: ['thing', 'other thing', 'third thing'],
        instructions: ['step 1: blah blah blah', 'step 2: blah blah']
    }, 
    {
        category: 'lunch', 
        name: 'four', 
        img: 'https://static01.nyt.com/images/2021/01/26/well/well-foods-microbiome/well-foods-microbiome-superJumbo.jpg', 
        ingredients: ['thing', 'other thing', 'third thing'],
        instructions: ['step 1: blah blah blah', 'step 2: blah blah']
    }, 
    {
        category: 'lunch', 
        name: 'five', 
        img: 'https://static01.nyt.com/images/2021/01/26/well/well-foods-microbiome/well-foods-microbiome-superJumbo.jpg', 
        ingredients: ['thing', 'other thing', 'third thing'],
        instructions: ['step 1: blah blah blah', 'step 2: blah blah']
    }, 
    {
        category: 'dinner', 
        name: 'six', 
        img: 'https://static01.nyt.com/images/2021/01/26/well/well-foods-microbiome/well-foods-microbiome-superJumbo.jpg', 
        ingredients: ['thing', 'other thing', 'third thing'],
        instructions: ['step 1: blah blah blah', 'step 2: blah blah']
    }, 
    {
        category: 'dinner', 
        name: 'seven', 
        img: 'https://static01.nyt.com/images/2021/01/26/well/well-foods-microbiome/well-foods-microbiome-superJumbo.jpg', 
        ingredients: ['thing', 'other thing', 'third thing'],
        instructions: ['step 1: blah blah blah', 'step 2: blah blah']
    }, 
    {
        category: 'dinner', 
        name: 'eight', 
        img: 'https://static01.nyt.com/images/2021/01/26/well/well-foods-microbiome/well-foods-microbiome-superJumbo.jpg', 
        ingredients: ['thing', 'other thing', 'third thing'],
        instructions: ['step 1: blah blah blah', 'step 2: blah blah']
    }, 
    {
        category: 'break', 
        name: 'one', 
        img: 'https://static01.nyt.com/images/2021/01/26/well/well-foods-microbiome/well-foods-microbiome-superJumbo.jpg', 
        ingredients: ['thing', 'other thing', 'third thing'],
        instructions: ['step 1: blah blah blah', 'step 2: blah blah']
    }, 
    {
        category: 'break', 
        name: 'two', 
        img: 'https://static01.nyt.com/images/2021/01/26/well/well-foods-microbiome/well-foods-microbiome-superJumbo.jpg', 
        ingredients: ['thing', 'other thing', 'third thing'],
        instructions: ['step 1: blah blah blah', 'step 2: blah blah']
    }, 
    {
        category: 'break', 
        name: 'three', 
        img: 'https://static01.nyt.com/images/2021/01/26/well/well-foods-microbiome/well-foods-microbiome-superJumbo.jpg', 
        ingredients: ['thing', 'other thing', 'third thing'],
        instructions: ['step 1: blah blah blah', 'step 2: blah blah']
    }, 
    {
        category: 'lunch', 
        name: 'four', 
        img: 'https://static01.nyt.com/images/2021/01/26/well/well-foods-microbiome/well-foods-microbiome-superJumbo.jpg', 
        ingredients: ['thing', 'other thing', 'third thing'],
        instructions: ['step 1: blah blah blah', 'step 2: blah blah']
    }, 
    {
        category: 'lunch', 
        name: 'five', 
        img: 'https://static01.nyt.com/images/2021/01/26/well/well-foods-microbiome/well-foods-microbiome-superJumbo.jpg', 
        ingredients: ['thing', 'other thing', 'third thing'],
        instructions: ['step 1: blah blah blah', 'step 2: blah blah']
    }, 
    {
        category: 'dinner', 
        name: 'six', 
        img: 'https://static01.nyt.com/images/2021/01/26/well/well-foods-microbiome/well-foods-microbiome-superJumbo.jpg', 
        ingredients: ['thing', 'other thing', 'third thing'],
        instructions: ['step 1: blah blah blah', 'step 2: blah blah']
    }, 
    {
        category: 'dinner', 
        name: 'seven', 
        img: 'https://static01.nyt.com/images/2021/01/26/well/well-foods-microbiome/well-foods-microbiome-superJumbo.jpg', 
        ingredients: ['thing', 'other thing', 'third thing'],
        instructions: ['step 1: blah blah blah', 'step 2: blah blah']
    }, 
    {
        category: 'dinner', 
        name: 'eight', 
        img: 'https://static01.nyt.com/images/2021/01/26/well/well-foods-microbiome/well-foods-microbiome-superJumbo.jpg', 
        ingredients: ['thing', 'other thing', 'third thing'],
        instructions: ['step 1: blah blah blah', 'step 2: blah blah']
    }
]