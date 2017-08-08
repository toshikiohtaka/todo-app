json.todo do |json|
  json.array!(@todo_results) do |todo|
    json.id          todo.id
    json.body        todo.body
    json.limit       todo.limit.strftime("%Y年%-m月%-d日")
    json.list_id     todo.list_id
    json.list_name   todo.list.name
    json.created_at  todo.created_at.strftime("%Y年%-m月%-d日")
  end
end

json.list do |json|
  json.array!(@list_results) do |list|
    json.id          list.id
    json.name        list.name
    json.created_at  list.created_at.strftime("%Y年%-m月%-d日")
  end
end
