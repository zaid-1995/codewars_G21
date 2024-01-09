function leo(oscar){
      if (oscar === 88) {
        return "Leo finally won the Oscar! Leo is happy.";
    } else if (oscar === 86) {
        return "Not even for Wolf of Wall Street?!";
    } else if (oscar < 88) {
        return "When will you give Leo an Oscar?";
    } else {
        return "Leo got one already!";
    }
}
console.log(leo(88));