class Api::PokemonController < ApplicationController

  def index
    @pokemon = Pokemon.all.includes(:items)
  end

  def show
    @pokemon = Pokemon.includes(:items).find(params[:id])
  end
end
