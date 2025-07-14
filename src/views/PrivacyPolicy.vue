<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<template>
    <div>
        <div class='max-w-3xl mx-auto p-6 pt-24  rounded-lg '>


            <div class="bg-gray-50 text-gray-900 font-sans leading-relaxed">

                <div class="max-w-4xl mx-auto px-6 py-10">
                    <!-- Section Française -->
                    <h1 class="text-4xl font-extrabold text-brand-default mb-6 border-b pb-2">RÈGLEMENT INTÉRIEUR DE LA
                        BIBLIOTHÈQUE WANDABOOK</h1>

                    <h2 class="text-2xl font-bold text-brand-default/95 mt-8 mb-4">I- DISPOSITIONS GÉNÉRALES</h2>

                    <h3 class="text-xl font-semibold text-brand-default/80 mb-2">Article 1 : Mission de la bibliothèque</h3>
                    <p>La Bibliothèque a pour mission de promouvoir la lecture, la culture et l’accès au savoir.</p>

                    <h3 class="text-xl font-semibold text-brand-default/80 mt-4 mb-2">Article 2 : Accès et conditions d’adhésion
                    </h3>
                    <p>L’accès à la Bibliothèque et au prêt des documents est réservé aux personnes dûment inscrites et
                        à jour de leur abonnement. Les clients doivent fournir une pièce d’identité émise par les
                        autorités locales.</p>

                    <h3 class="text-xl font-semibold text-brand-default/80 mt-4 mb-2">Article 3 : Abonnement</h3>
                    <p>Le montant de l’abonnement est fixé mensuellement et annuellement par l’administration.</p>

                    <h2 class="text-2xl font-bold text-brand-default/95 mt-8 mb-4">II- PRÊT DE DOCUMENTS</h2>

                    <h3 class="text-xl font-semibold text-brand-default/80 mb-2">Article 4 : Condition de prêt</h3>
                    <p>Le prêt à domicile est réservé aux abonnés en règle. Il est individuel et sous leur
                        responsabilité. Les enfants sans CNI peuvent emprunter sous condition de présentation d’un
                        document et d’un accord parental.</p>

                    <h3 class="text-xl font-semibold text-brand-default/80 mt-4 mb-2">Article 5 : Documents empruntables</h3>
                    <p>Tous les documents sont empruntables sans restriction, mais il est limité à 2 livres d’une même
                        catégorie pour certains types d’abonnement.</p>

                    <h3 class="text-xl font-semibold text-brand-default/80 mt-4 mb-2">Article 6 : Modalités de prêt</h3>
                    <p>Le prêt est sans limite de durée tant que l’abonnement est à jour et que les livres sont
                        retournés avant un nouvel emprunt.</p>

                    <h2 class="text-2xl font-bold text-brand-default/95 mt-8 mb-4">III- RECOMMANDATIONS ET INTERDICTIONS</h2>

                    <h3 class="text-xl font-semibold text-brand-default/80 mb-2">Article 7 : Responsabilités de l’emprunteur
                    </h3>
                    <p>Les documents doivent être en bon état. Toute perte ou détérioration engage à un remplacement. En
                        cas de détériorations répétées, l’exclusion est définitive.</p>
                    <p><strong class="text-red-600">Attention :</strong> Toute reproduction (numérique ou imprimée) est
                        interdite.</p>

                    <h2 class="text-2xl font-bold text-brand-default/95 mt-8 mb-4">IV- DISPOSITIONS FINALES</h2>

                    <h3 class="text-xl font-semibold text-brand-default/80 mb-2">Article 8 : Respect du règlement</h3>
                    <p>Le non-respect du règlement peut entraîner la suspension de l’accès aux services.</p>

                    <h3 class="text-xl font-semibold text-brand-default/80 mt-4 mb-2">Article 9 : La Communication</h3>
                    <p>Les abonnés consentent à recevoir des rappels ou informations via messages ou appels.</p>

                    <hr class="my-10 border-gray-300" />

                    <!-- Section Anglaise -->
                    <h1 class="text-4xl font-extrabold text-brand-default mb-6 border-b pb-2">WANDABOOK LIBRARY RULES AND
                        REGULATIONS</h1>

                    <h2 class="text-2xl font-bold text-brand-default/95 mt-8 mb-4">I- GENERAL PROVISIONS</h2>

                    <h3 class="text-xl font-semibold text-brand-default/80 mb-2">Article 1: Library Mission</h3>
                    <p>The library promotes reading, culture, and access to knowledge.</p>

                    <h3 class="text-xl font-semibold text-brand-default/80 mt-4 mb-2">Article 2: Access and Membership
                        Conditions</h3>
                    <p>Only registered users with current membership can access the library. A valid ID must be
                        provided.</p>

                    <h3 class="text-xl font-semibold text-brand-default/80 mt-4 mb-2">Article 3: Subscription</h3>
                    <p>Subscription fees are determined monthly and annually by the administration.</p>

                    <h2 class="text-2xl font-bold text-brand-default/95 mt-8 mb-4">II- DOCUMENT LOAN</h2>

                    <h3 class="text-xl font-semibold text-brand-default/80 mb-2">Article 4: Loan Conditions</h3>
                    <p>Loans are for users with valid membership. Children may borrow via their parents with supporting
                        documents.</p>

                    <h3 class="text-xl font-semibold text-brand-default/80 mt-4 mb-2">Article 5: Borrowable Documents</h3>
                    <p>All types of documents may be borrowed. A limit of 2 books per category applies for larger
                        subscriptions.</p>

                    <h3 class="text-xl font-semibold text-brand-default/80 mt-4 mb-2">Article 6: Loan Terms</h3>
                    <p>No time limit is imposed if the subscription is current and books are returned before borrowing
                        again.</p>

                    <h2 class="text-2xl font-bold text-brand-default/95 mt-8 mb-4">III- RECOMMENDATIONS AND PROHIBITIONS</h2>

                    <h3 class="text-xl font-semibold text-brand-default/80 mb-2">Article 7: Borrower's Responsibilities</h3>
                    <p>Books must be in good condition. Lost or damaged books must be replaced or reimbursed. Repeated
                        offenses result in exclusion.</p>
                    <p><strong class="text-red-600">Warning:</strong> Reproduction of any material is strictly
                        prohibited.</p>

                    <h2 class="text-2xl font-bold text-brand-default/95 mt-8 mb-4">IV- FINAL PROVISIONS</h2>

                    <h3 class="text-xl font-semibold text-brand-default/80 mb-2">Article 8: Compliance with the Rules</h3>
                    <p>Failure to follow the rules may lead to suspension of library access.</p>

                    <h3 class="text-xl font-semibold text-brand-default/80 mt-4 mb-2">Article 9: Communication</h3>
                    <p>Subscribers agree to receive communications and reminders via text or phone.</p>

                </div>
            </div>
        </div>
    </div>
</template>

<style></style>