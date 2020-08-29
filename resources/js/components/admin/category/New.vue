<template>
    <div>
    <section class="content">
      <div class="row justify-content-around">
        <div class="col-8 mt-3">
            <div class="card">
              <div class="card-header">
                <h3 class="card-title">Add a new category</h3>
                    <div class="card-tools">
                <button class="btn btn-primary">
                    <router-link to="/category-list" class="text-white"><i class="fa fa-list"></i> Category List</router-link>

                  </button>
                    </div>
              </div>
              <!-- /.card-header -->
              <!-- form start -->
              <form role="form">
                <div class="card-body">
                  <div class="form-group">
                    <label for="exampleInputEmail1">Category Name</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Enter email">
                  </div>
                </div>
                <!-- /.card-body -->

                <div class="card-footer">
                  <button type="submit" class="btn btn-primary">Submit</button>
                </div>
              </form>
            </div>
          <!-- /.card -->
        </div>
        <!-- /.col -->
      </div>
      <!-- /.row -->
    </section>
    </div>
</template>