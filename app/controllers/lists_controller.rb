class ListsController < ApplicationController

  before_action :set_lists

  def index
    @list = List.new
  end

  def create
    @list = List.new(list_params)
    if @list.save
      redirect_to root_path
      flash[:notice] = '新しいTodoリスト作成されました'
    else
      render :index
    end
  end

  private

  def list_params
    params.require(:list).permit(:name)
  end

  def set_lists
    @lists = List.order("created_at DESC").all
  end
end
