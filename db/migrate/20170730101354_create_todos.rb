class CreateTodos < ActiveRecord::Migration[5.0]
  def change
    create_table :todos do |t|
      t.text :body, null: false
      t.string :limit, null: false
      t.references :list, foreign_key: true

      t.timestamps
    end
  end
end
