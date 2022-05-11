const PullReques = {
 title: "First PR",
 branchName: "master",
 repositoryNameAssociated: "weeek2",
 status: "SOLVED",
 dateCreated: "04-04-2022",
 getStatus : function(){
   return this.status
 },
 getTitleAndAuthor: function(){
   return `This repository ${this.title} was created by ${this.branchName}`
 }
}

console.log("Nombre del repo:" + PullReques.title)
console.log("Info gral: " + PullReques.getTitleAndAuthor())
