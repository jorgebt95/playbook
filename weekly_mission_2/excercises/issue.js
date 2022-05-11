const issue = {
 title: "SyntaxError",
 repositoryNameAssociated: "weeek2",
 status: "SOLVED",
 numberOfComments: 100,
 labels: 199,
 author: "Carlo Gil",
 dateCreated: "04-04-2022",
 lastUpdated: "10-05-2022",
 getGeneralInfo : function(){
   return this.title+" "+ this.status +" "+this.author
 },
 getTitleAndAuthor: function(){
   return `This repository ${this.title} was created by ${this.author}`
 }
}

console.log("Nombre del repo:" + issue.title)
console.log("Info gral: " + issue.getGeneralInfo())
