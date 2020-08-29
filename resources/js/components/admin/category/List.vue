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
              <table id="example2" class="table table-bordered table-hover">
                <thead>
                <tr>
                  <th>SL No</th>
                  <th>Category Name</th>
                  <th>Action</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td>1</td>
                  <td>Bangladesh</td>
                  <td>
                      <a href="" class="btn btn-info btn-sm"><i class="fa fa-edit"></i> Edit</a>
                      <a href="" class="btn btn-danger btn-sm"><i class="fa fa-trash"></i> Delete</a>
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