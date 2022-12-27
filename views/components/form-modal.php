<form action="" method="POST" id=<?=$submissionType?>>
    <span class="close">&times;</span>
    <input type="text" id="name" name="name" placeholder="Restaurant Name">
    <select name="cuisine" id="cuisine">
        <option value="" selected disabled>--Select a cuisine</option>
        <option value="korean">korean</option>
        <option value="japanese">japanese</option>
        <option value="american">american</option>
        <option value="chinese">chinese</option>
        <option value="mexican">mexican</option>
        <option value="spanish">spanish</option>
    </select>
    <input type="number" id="price" name="price" placeholder="Price">
    <input type="url" id="url" name="url" placeholder="URL">
    <button type="button" id="<?=$btn?>" name="<?=$btn?>"><?=$btnText?></button>
    <div class="result-msg"></div>
</form>
