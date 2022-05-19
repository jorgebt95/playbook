class User {
	constructor(id, username, name, bio, dategen, lastupdate){
		this.id = id
		this.username = username
		this.name = name
		this.bio = bio 
		this. dategen = new Date()
		this.lastupdate = new Date()
	}

	get getUsername(){
		return this.username
	}
	get getBio(){
		return this.bio
	}

	get getDateCreated(){
		return this.dategen
	}

	get getLastUpdated(){
		return this.lastupdate
	}

	set setUsername(newUsername){
		this.username = newUsername
	}

	set setBio(newBio){
		this.bio = newBio
	}

}

module.exports = User