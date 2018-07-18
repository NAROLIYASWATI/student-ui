export class Student{

    sid: number;
	fname: string;
	lname: string;
	gender: string;
	dob: string;
    religion: string;
	category: string;
	course: string;
    branch: string;

    constructor(sid: number,fname: string,lname: string,gender: string,
        dob: string,religion: string,category: string,course: string,
        branch: string){
            this.sid=sid;
            this.fname=fname;
            this.lname=lname;
            this.gender=gender;
            this.dob=dob;
            this.religion=religion;
            this.category=category;
            this.course=course;
            this.branch=branch;
        }
    
}