<template>
   <section>
        <b-notification ref="element" :closable="false">
          <div class="tile is-parent">
            
              
            <b-table
                :data="contacts"
                :bordered="false"
                :striped="true"
                :narrowed="false"
                :hoverable="true"
                :loading="isLoading"
                :focusable="false"
                :mobile-cards="false">

                <template slot-scope="props">
                    <b-table-column field="id" label="ID" width="40" numeric>
                        Name
                    </b-table-column>
                    <b-table-column field="first_name" label="First Name">
                        Did
                    </b-table-column>

                    <b-table-column field="date" label="Date" centered>
                        <span class="tag is-success">
                            {{ new Date(props.row.date).toLocaleDateString() }}
                        </span>
                    </b-table-column>

                    <b-table-column label="Gender">
                        <span>
                            <b-icon pack="fas"
                                :icon="props.row.gender === 'Male' ? 'mars' : 'venus'">
                            </b-icon>
                            {{ props.row.gender }}
                        </span>
                    </b-table-column>
                </template>

                <template slot="empty">
                    <section class="section">
                        <div class="content has-text-grey has-text-centered">
                            <p>
                                <b-icon
                                    icon="emoticon-sad"
                                    size="is-large">
                                </b-icon>
                            </p>
                            <p>Nothing here.</p>
                        </div>
                    </section>
                </template>
            </b-table>


          </div>
          
          <b-loading :is-full-page="false" :active.sync="isLoading" :can-cancel="true"></b-loading>
        </b-notification>
    </section>
</template>
<script>
import { mapState } from 'vuex'
/*
import Lorena from '../services/Lorena'
const lorena = new Lorena()
import Contact from './Contact'
import AddContact from './AddContact'
*/

export default {
  name: 'contacts',
  data() {
    return {
        isLoading: true,
        contacts: [],
    }
  },
  conputed: mapState(['step']),
  created() {
    // eslint-disable-next-line no-console
    this.loadClients()
  },
  methods: {
    async loadClients() {
      // let idRecipe = await lorena.sendMessage('clients-list', {})
      // this.contacts = await lorena.getResponse(idRecipe)
      this.contacts = [
        {
          type: 'contact',
          status: 'accepted',
          did: 232323,
          didMethod: 'did:lor:lab:',
          createdAt: '2020-1-1'
        }
      ]
      this.isLoading = false
    }
  }
}
</script>
<style>
</style>
