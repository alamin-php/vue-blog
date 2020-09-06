<template>
    <div>
    <section class="content">
      <div class="row justify-content-around">
        <div class="col-8 mt-3">
          <div class="card">
            <div class="card-header">
              <h3 class="card-title">Category List</h3>
              <div class="card-tools">
                  <button class="btn btn-primary"> 
                    <router-link to="/add-category" class="text-white"><i class="fa fa-plus-circle"></i> Add Category</router-link>
                  </button>
              </div>
            </div>
            <!-- /.card-header -->
            <div class="card-body">
              <table id="example2" class="table table-bordered table-hover text-center">
                <thead>
                <tr>
                  <th width="10%">SL No</th>
                  <th width="50%">Category Name</th>
                  <th width="20%">Created At</th>
                  <th width="20%">Action</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(category,index) in getallCategory" :key="category.id">
                  <td>{{ ++index }}</td>
                  <td>{{ category.cat_name }}</td>
                  <td>{{ category.created_at | timeformat }}</td>
                  <td>
                      <a href="" class="btn btn-info btn-sm"><i class="fa fa-edit"></i> Edit</a>
                      <a href="" @click.prevent="deletecategory(category.id)" class="btn btn-danger btn-sm"><i class="fa fa-trash"></i> Delete</a>
                  </td>
                </tr>
                </tbody>
              </table>
            </div>
            <!-- /.card-body -->
          </div>
          <!-- /.card -->
        </div>
        <!-- /.col -->
      </div>
      <!-- /.row -->
    </section>
    </div>
</template>

<script>
export default {
    name:"List",

    mounted() {
      this.$store.dispatch("allCategory")
    },

    computed:{
      getallCategory(){
        return this.$store.getters.getCategory
        
      }
    },

    methods: {
      deletecategory(id){
        axios.get('/category/'+id)
        .then(() =>{
              this.$store.dispatch("allCategory")
              Toast.fire({
              icon: 'success',
              title: 'Category deleted in successfully'
            })
        })
      }
  }
 
}
</script>