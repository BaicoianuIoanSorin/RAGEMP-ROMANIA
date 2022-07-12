getNameOnNameID = function(playerNameOrPlayerId)
{
    if(playerNameOrPlayerId === parseInt(playerNameOrPlayerId)) return mp.players.at(playerNameOrPlayerId);
    else
    {
        mp.players.forEach((rageMpPlayer) => {
            if(rageMpPlayer.name !== null)
            {
                if(rageMpPlayer.name.toLowerCase().startsWith(playerNameOrPlayerId.toLowerCase()))
                {
                    return rageMpPlayer;
                }
            }
        });
        return null;
    }
}