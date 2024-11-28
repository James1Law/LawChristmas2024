document.addEventListener('DOMContentLoaded', function() {
    const filter = document.getElementById('list-filter');
    
    filter.addEventListener('change', function() {
        const selected = this.value;
        if (!selected) return;

        // Create a map of values to titles and family groups
        const titleMap = {
            'grandma': { title: "Grandma's List", family: "grandma" },
            'rachel': { title: "Rachel's List", family: "Team Clarendon" },
            'conor': { title: "Conor's List", family: "Team Clarendon" },
            'edith': { title: "Edith's List", family: "Team Clarendon" },
            'arthur': { title: "Arthur's List", family: "Team Clarendon" },
            'katie': { title: "Sparrow's List", family: "The Walkers" },
            'anton': { title: "Anton's List", family: "The Walkers" },
            'madeleine': { title: "Madeleine's List", family: "The Walkers" },
            'freya': { title: "Freya's List", family: "The Walkers" },
            'isabelle': { title: "Isabelle's List", family: "The Walkers" },
            'emma': { title: "Emma's List", family: "The Wrights" },
            'james-wright': { title: "James's List", family: "The Wrights" },
            'henry': { title: "Henry's List", family: "The Wrights" },
            'florence': { title: "Florence's List", family: "The Wrights" },
            'matilda': { title: "Matilda's List", family: "The Wrights" },
            'james-law': { title: "James's List", family: "The Laws" },
            'gemma': { title: "Gemma's List", family: "The Laws" }
        };

        // Find the corresponding title and family
        const info = titleMap[selected];
        if (!info) return;

        // Find all family labels
        const familyLabels = document.querySelectorAll('.family-label');
        let familyGroup = null;

        // Find the correct family group
        for (let label of familyLabels) {
            if (label.textContent.includes(info.family)) {
                familyGroup = label.closest('.family-group');
                break;
            }
        }

        if (!familyGroup) return;

        // Find all h2s in this family group
        const h2Elements = familyGroup.querySelectorAll('.wishlist-card h2');
        let targetCard = null;

        // Find the correct card
        for (let h2 of h2Elements) {
            if (h2.textContent.includes(info.title)) {
                targetCard = h2.closest('.wishlist-card');
                break;
            }
        }
        
        if (targetCard) {
            // Calculate scroll position
            const offset = targetCard.offsetTop - 20;
            
            // Try different scroll methods for better cross-browser compatibility
            try {
                window.scrollTo({
                    top: offset,
                    behavior: 'smooth'
                });
            } catch (error) {
                window.scrollTo(0, offset);
            }
            
            // Add highlight effect
            targetCard.classList.add('highlight');
            setTimeout(() => {
                targetCard.classList.remove('highlight');
            }, 2000);
        }
    });
});

// Add custom contains selector for case-insensitive search
jQuery.expr[':'].contains = function(a, i, m) {
    return jQuery(a).text().toLowerCase()
        .indexOf(m[3].toLowerCase()) >= 0;
};
