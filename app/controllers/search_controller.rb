class SearchController < ApplicationController

  def index
  end

  def search
    @todo_results = Todo.where('body LIKE(?)', "%#{params[:input]}%")
    @list_results = List.where('name LIKE(?)', "%#{params[:input]}%")
    respond_to do |format|
      format.json
    end
  end
end
