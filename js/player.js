class player{
constructor(){}
updateQuestion1(Q1,Q2,Q3,name)
{
    var playername="user"+playercount;
        database.ref(playername).set({
        'question1':Q1,
        'question2':Q2,
        'question3':Q3,
        'name':name
    })
}



getCount()
{
    database.ref('usercount').on(
        "value",function(data){
            playercount=data.val();

    })
}
updateplayercount(count)
{
    database.ref('/').update({
        usercount:count
    })
}

}