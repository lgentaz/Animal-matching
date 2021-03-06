class UsersController < ApplicationController
  before_action :authenticate_user!

  def show
    @user = current_user
  end

  def edit
    @user = current_user
  end

  def update
    @user = current_user
    if @user.update(user_params)
      flash[:success]="Bravo ! Ton profil à correctement été mis à jour."
    else
      flash[:error]="Mince, il y a eu une erreur"
    end
    redirect_to users_path
  end

  private
    def user_params
      params.require(:user).permit(:id, :first_name, :last_name, :address, :city, :country, :default_pet_id)
    end
end
