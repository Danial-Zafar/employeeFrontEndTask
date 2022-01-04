import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  components: {
  },
})
export default class EmployeeAddDialogue extends Vue {
  @Prop({default:[]}) employeeData!: any [];
  
  dialog = false;
  firstName='';
  lastName='';
  role='';

  onClickSave(){
    this.dialog = false;
    const obj={
      "firstName":this.firstName, 
      "lastName":this.lastName, 
      "role":this.role
    };

    this.employeeData.push(obj);
  }
}