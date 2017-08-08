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

  def update
    @todo = Todo.find(params[:id])
    if params[:state] == "1"
      @todo.update(state: 2)
    else
      @todo.update(state: 1)
    end
  end

  private

  def todo_params
    params.require(:todo).permit(:body, :limit, :state).merge(list_id: params[:list_id])
  end

  def set_list
    @list = List.find(params[:list_id])
  end

  def set_todos
    @todos = List.find(params[:list_id]).todos.order('created_at DESC')
  end
end
