try {
    let test = add (10, 11)
} catch (error){
    console.log(error)
    console.log(error.stack)
    console.log(error.name)
    console.log(error.message)
}