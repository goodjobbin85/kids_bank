class Student < ApplicationRecord
  has_many :tasks

  def transfer(amount)
    self.balance += amount
    return balance
  end
end
