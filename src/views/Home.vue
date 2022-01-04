<template>
  <div class="home">
    <v-row>
      <v-col cols="12">
       <EmployeeDataTable :employeeData="employeeData"></EmployeeDataTable>
      </v-col>
      <v-col cols="12">
        <EmployeeAddDialogue :employeeData="employeeData"></EmployeeAddDialogue>
      </v-col>
    </v-row> 
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import EmployeeDataTable from '../modules/employee/components/employee-data-table/employee-data-table.vue';
import EmployeeAddDialogue from '../modules/employee/components/employee-add-dialogue/employee-add-dialogue.vue';
import { EmployeeConstants } from '../modules/employee/constant/employee-constants';
import {EmployeeDataModel} from '../modules/employee/model/employee.model';

@Component({
  components: {
   EmployeeDataTable,
   EmployeeAddDialogue
  },
})
export default class Home extends Vue {
  empConst = EmployeeConstants;
  employeeData: any [] = this.empConst.employeeData.users;

  deleteEmployee(item:any){
     this.employeeData =this.employeeData.map((x)=>{
                if(item.firstName != x.firstName){
                    return x;
                } else {
                    return null;
                }
            });
  }
}
</script>
