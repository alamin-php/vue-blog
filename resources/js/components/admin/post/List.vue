<template>
    <div>
    <section class="content">
      <div class="row justify-content-around">
        <div class="col-11 mt-3">
          <div class="card">
            <div class="card-header">
              <h3 class="card-title">Post List</h3>
              <div class="card-tools">
                  <button class="btn btn-primary"> 
                    <router-link to="/add-category" class="text-white"><i class="fa fa-plus-circle"></i> Add Post</router-link>
                  </button>
              </div>
            </div>
            <!-- /.card-header -->
            <div class="card-body">
              <table id="example1" class="table table-bordered table-hover text-center">
                <thead>
                <tr>
                  <th>SL No</th>
                  <th>User Name</th>
                  <th>Category Name</th>
                  <th>Post Title</th>
                  <th>Post Details</th>
                  <th>Photo</th>
                  <th>Created At</th>
                  <th>Action</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td>1</td>
                  <td>User Name</td>
                  <td>Bangladesh</td>
                  <td>Islam is best</td>
                  <td>Post details</td>
                  <td>Photo Name</td>
                  <td>20 Sep 2020</td>
                  <td>
                        <a href="" class=" btn btn-primary btn-sm"> Edit</a>
                        <a href="" class=" btn btn-danger btn-sm"> Delete</a>
                      <!-- <router-link :to="`/edit-category/${category.id}`" class="btn btn-primary btn-sm">Edit</router-link>
                      <a href="" @click.prevent="deletecategory(category.id)" class="btn btn-danger btn-sm">Delete</a> -->
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
      // this.$store.dispatch("allCategory")
    },

    computed:{
      // getallCategory(){
      //   return this.$store.getters.getCategory
        
      // }
    },

    methods: {
      // deletecategory(id){
      //   axios.get('/category/'+id)
      //   .then(() =>{
      //         this.$store.dispatch("allCategory")
      //         Toast.fire({
      //         icon: 'success',
      //         title: 'Category deleted in successfully'
      //       })
      //   })
      //   .catch(() =>{
      //     console.log('Sorry! category not deleted. Some internal error')
      //   })
      // }
  }
 
}
</script>