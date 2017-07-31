class List < ApplicationRecord
  has_many :todos
  validates :name, presence: true
  validates :name, length: { maximum: 30 }
end
