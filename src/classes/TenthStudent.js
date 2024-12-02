class TenthStudent{
     static passmarks =35;
     static About=()=>{}
     constructor(){
          console.log("inside the constructor");
          this.telMarks =0;
          this.engMarks =0;
          this.hinMarks =0;
          this.matMarks =0;
          this.scimarks =0;
          this.socMarks =0;
     }
     caluculateResult =()=>{
          if(this.telMarks >= TenthStudent.passmarks &&
             this.engMarks >= TenthStudent.passmarks &&
             this.hinMarks >= TenthStudent.passmarks &&
             this.matMarks >= TenthStudent.passmarks &&
             this.scimarks >= TenthStudent.passmarks &&
             this.socMarks >= TenthStudent.passmarks 
          )
          {console.log("student passed")}
          else{console.log("student failed")}
      }
      About=()=>{
          console.log("abcd")
      }
  
     
}
export default TenthStudent;