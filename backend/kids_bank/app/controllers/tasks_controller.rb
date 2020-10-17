class TasksController < ApplicationController
  before_action :set_task, only: [:show, :update, :destroy]

  # GET /tasks
  def index
    @student = Student.find(params[:student_id])
    @tasks = @student.tasks

    render json: @tasks
  end

  # GET /tasks/1
  def show
    @student = Student.find(params[:student_id])
    @task = @student.tasks.find_by(id: params[:id])

    render json: @task
  end

  # POST /tasks
  def create
    @student = Student.find(params[:student_id])
    @task = @student.tasks.new(task_params)

    if @task.save
      render json: @student, status: :created, location: @task
    else
      render json: @task.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /tasks/1
  def update
    if @task.update(task_params)
      render json: @task
    else
      render json: @task.errors, status: :unprocessable_entity
    end
  end

  # DELETE /tasks/1
  def destroy
    @task.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_task
      @task = Task.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def task_params
      params.require(:task).permit(:title, :description, :student_id, :value, :is_complete?)
    end
end
