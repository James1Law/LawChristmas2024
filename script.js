document.addEventListener('DOMContentLoaded', function() {
    const filter = document.getElementById('list-filter');
    
    filter.addEventListener('change', function() {
        const selected = this.value;
        if (!selected) return;

        // Create a map of values to titles
        const titleMap = {
            'grandma': "Grandma's List",
            'rachel': "Rachel's List",
            'conor': "Conor's List",
            'edith': "Edith's List",
            'arthur': "Arthur's List",
            'katie': "Sparrow's List",
            'anton': "Anton's List",
            'madeleine': "Madeleine's List",
            'freya': "Freya's List",
            'isabelle': "Isabelle's List",
            'emma': "Emma's List",
            'james-wright': "James's List",
            'henry': "Henry's List",
            'florence': "Florence's List",
            'matilda': "Matilda's List",
            'james-law': "James's List",
            'gemma': "Gemma's List"
        };

        // Find the corresponding title
        const title = titleMap[selected];
        if (!title) return;

        // Find all h2 elements
        const h2Elements = document.querySelectorAll('.wishlist-card h2');
        let targetCard = null;

        // Find the card with matching title
        for (let h2 of h2Elements) {
            if (h2.textContent.includes(title)) {
                targetCard = h2.closest('.wishlist-card');
                break;
            }
        }
        
        if (targetCard) {
            // Smooth scroll to the selected card
            targetCard.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'center'
            });
            
            // Add highlight effect
            targetCard.classList.add('highlight');
            setTimeout(() => {
                targetCard.classList.remove('highlight');
            }, 2000);
        }
    });
});

// Helper function to capitalize first letter
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// Add custom contains selector for case-insensitive search
jQuery.expr[':'].contains = function(a, i, m) {
    return jQuery(a).text().toLowerCase()
        .indexOf(m[3].toLowerCase()) >= 0;
};
