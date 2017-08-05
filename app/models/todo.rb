class Todo < ApplicationRecord
  belongs_to :list
  validates :body, :limit, presence: true
end
