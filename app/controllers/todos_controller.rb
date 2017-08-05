class TodosController < ApplicationController

  before_action :set_list, :set_todos

  def index
    @todo = Todo.new
  end

  def create
    @todo = Todo.new(todo_params)
    if @todo.save
      redirect_to list_todos_path(@list)
    else
      render :index
    end
  end

  private

  def todo_params
    params.require(:todo).permit(:body, :limit).merge(list_id: params[:list_id])
  end

  def set_list
    @list = List.find(params[:list_id])
  end

  def set_todos
    @todos = List.find(params[:list_id]).todos.order('created_at DESC')
  end
end
