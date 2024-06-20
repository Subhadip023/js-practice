function swap(a,b){
    console.log('before swape a='+a)
    console.log('before swape b='+b)
    a=a+b;
    b=a-b;
    a=a-b;
    console.log('after swape a='+a)
    console.log('after swape b='+b)
}

swap(10,20)